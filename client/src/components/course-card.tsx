import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Chip,
  Box,
  Tooltip,
} from '@mui/material';
import { PlayArrow, AccessTime, CalendarToday } from '@mui/icons-material';
import type { Course } from '@shared/schema';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const handleWatchNow = () => {
    // Open SharePoint video URL in new tab
    window.open(course.videoUrl, '_blank');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
      }}
      data-testid={`card-course-${course.id}`}
    >
      <CardMedia
        component="img"
        height="180"
        image={course.thumbnailUrl}
        alt={`Thumbnail for ${course.title}`}
        sx={{ objectFit: 'cover' }}
        data-testid={`img-thumbnail-${course.id}`}
      />
      
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography 
          gutterBottom 
          variant="h6" 
          component="h2"
          data-testid={`text-title-${course.id}`}
        >
          {course.title}
        </Typography>
        
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ mb: 2, flexGrow: 1 }}
          data-testid={`text-description-${course.id}`}
        >
          {course.description}
        </Typography>
        
        {/* Course metadata */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Chip 
            label={course.category} 
            size="small" 
            color="primary"
            variant="outlined"
            data-testid={`chip-category-${course.id}`}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <AccessTime sx={{ fontSize: 14 }} />
            <Typography 
              variant="caption" 
              color="text.secondary"
              data-testid={`text-duration-${course.id}`}
            >
              {course.duration}
            </Typography>
          </Box>
        </Box>
        
        {/* Tags */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
          {course.tags.slice(0, 3).map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              variant="outlined"
              sx={{ fontSize: '0.7rem', height: '20px' }}
              data-testid={`chip-tag-${course.id}-${index}`}
            />
          ))}
          {course.tags.length > 3 && (
            <Tooltip title={`${course.tags.length - 3} more tags: ${course.tags.slice(3).join(', ')}`}>
              <Chip
                label={`+${course.tags.length - 3}`}
                size="small"
                variant="outlined"
                sx={{ fontSize: '0.7rem', height: '20px' }}
                data-testid={`chip-more-tags-${course.id}`}
              />
            </Tooltip>
          )}
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <CalendarToday sx={{ fontSize: 14 }} />
          <Typography 
            variant="caption" 
            color="text.secondary"
            data-testid={`text-date-${course.id}`}
          >
            {formatDate(course.date)}
          </Typography>
        </Box>
      </CardContent>
      
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button 
          variant="contained" 
          color="primary"
          fullWidth
          startIcon={<PlayArrow />}
          onClick={handleWatchNow}
          aria-label={`Watch ${course.title}`}
          data-testid={`button-watch-${course.id}`}
        >
          Watch Now
        </Button>
      </CardActions>
    </Card>
  );
}
