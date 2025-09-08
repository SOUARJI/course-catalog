import { Card, CardContent, Typography, Box } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";

export default function NotFound() {
  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        width: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        bgcolor: 'grey.50'
      }}
    >
      <Card sx={{ width: '100%', maxWidth: 400, mx: 2 }}>
        <CardContent sx={{ pt: 3 }}>
          <Box sx={{ display: 'flex', mb: 2, gap: 1, alignItems: 'center' }}>
            <ErrorOutline sx={{ fontSize: 32, color: 'error.main' }} />
            <Typography variant="h4" component="h1" color="text.primary">
              404 Page Not Found
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            Did you forget to add the page to the router?
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
