import { useState, useMemo } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  TextField,
  InputAdornment,
  Chip,
  Box,
  IconButton,
  Paper,
  Skeleton,
  Fade,
  Fab,
  Tooltip,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import {
  Search,
  LightMode,
  DarkMode,
  KeyboardArrowUp,
} from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import { CourseCard } from '@/components/course-card';
import { useTheme } from '@/components/theme-provider';
import type { Course } from '@shared/schema';

const categories = ["All", "API Development", "DevOps", "Best Practices"];

export default function Home() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch courses data
  const { data: courses = [], isLoading, error } = useQuery<Course[]>({
    queryKey: ['/api/courses'],
  });

  // Filter and search courses
  const filteredCourses = useMemo(() => {
    if (!courses) return [];
    
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by date (newest first)
  }, [courses, searchTerm, selectedCategory]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6" color="error" gutterBottom>
            Error Loading Courses
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Failed to load course data. Please try refreshing the page.
          </Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Navigation Bar */}
      <AppBar position="fixed" elevation={2}>
        <Toolbar>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }}
            data-testid="text-app-title"
          >
            Team Video Course Catalog
          </Typography>
          
          {/* Navigation Links */}
          <Button 
            color="inherit" 
            sx={{ mr: 1 }}
            data-testid="button-nav-all-courses"
          >
            All Courses
          </Button>
          <Button 
            color="inherit" 
            sx={{ mr: 2 }}
            data-testid="button-nav-categories"
          >
            Categories
          </Button>
          
          {/* Dark Mode Toggle */}
          <Tooltip title="Toggle dark mode">
            <IconButton
              color="inherit"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              data-testid="button-toggle-theme"
            >
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #00acc1 100%)',
          color: 'white',
          py: { xs: 4, md: 6 },
          mt: 8, // Account for fixed AppBar
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            data-testid="text-hero-title"
          >
            Knowledge Sharing Portal
          </Typography>
          <Typography 
            variant="h6" 
            component="p"
            data-testid="text-hero-subtitle"
          >
            Discover our latest video courses on API Development, DevOps, and Best Practices
          </Typography>
        </Container>
      </Box>

      {/* Filter and Search Section */}
      <Paper
        elevation={0}
        sx={{
          background: theme => darkMode 
            ? 'rgba(18, 18, 18, 0.95)' 
            : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: theme => `1px solid ${darkMode 
            ? 'rgba(255, 255, 255, 0.12)' 
            : 'rgba(0, 0, 0, 0.12)'}`,
          position: 'sticky',
          top: 64,
          zIndex: 100,
        }}
      >
        <Container maxWidth="lg" sx={{ py: 3 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Search Bar */}
            <div>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search courses by title, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                aria-label="Search courses"
                data-testid="input-search"
              />
            </div>
            
            {/* Category Filter */}
            <div>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
                <Typography variant="body2" sx={{ mr: 1 }}>
                  Filter by:
                </Typography>
                {categories.map((category) => (
                  <Chip
                    key={category}
                    label={category}
                    clickable
                    color={selectedCategory === category ? 'primary' : 'default'}
                    variant={selectedCategory === category ? 'filled' : 'outlined'}
                    onClick={() => setSelectedCategory(category)}
                    aria-label={`Filter by ${category}`}
                    data-testid={`chip-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  />
                ))}
              </Box>
            </div>
          </div>
        </Container>
      </Paper>

      {/* Course Grid */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {isLoading ? (
          // Loading skeleton
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item}>
                <Card>
                  <Skeleton variant="rectangular" height={180} />
                  <CardContent>
                    <Skeleton variant="text" height={32} />
                    <Skeleton variant="text" height={60} />
                    <Skeleton variant="text" height={24} width="60%" />
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <Fade in={!isLoading}>
            <div>
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <div key={course.id}>
                      <CourseCard course={course} />
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <Paper sx={{ p: 4, textAlign: 'center' }}>
                    <Typography 
                      variant="h6" 
                      gutterBottom
                      data-testid="text-no-results-title"
                    >
                      No courses found
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      data-testid="text-no-results-description"
                    >
                      Try adjusting your search terms or filter criteria.
                    </Typography>
                  </Paper>
                </div>
              )}
            </div>
          </Fade>
        )}

        {/* Results count */}
        {!isLoading && filteredCourses.length > 0 && (
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography 
              variant="body2" 
              color="text.secondary"
              data-testid="text-results-count"
            >
              Showing {filteredCourses.length} of {courses.length} courses
            </Typography>
          </Box>
        )}
      </Container>

      {/* Scroll to top button */}
      <Fab
        color="primary"
        aria-label="Scroll to top"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
        onClick={scrollToTop}
        data-testid="button-scroll-top"
      >
        <KeyboardArrowUp />
      </Fab>
    </Box>
  );
}
