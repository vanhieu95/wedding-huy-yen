import { getImageUrl } from '@/utils/imageHelper'
import { Alarm, CalendarMonth, Place } from '@mui/icons-material'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Slide,
  Stack,
} from '@mui/material'
import GoogleMap from '@/components/GoogleMap'

function EventCard({
  imageUrl,
  title,
  date,
  time,
  place,
  location,
  index,
  slideIn,
}) {
  const image = getImageUrl(imageUrl)
  const currentSlideIn = slideIn != null ? slideIn[index] : false

  return (
    <Slide direction="left" in={currentSlideIn}>
      <Card
        sx={{
          marginBottom: '2rem',
        }}
      >
        <CardActionArea>
          <CardContent>
            <h3 className="mb-4 font-shantell text-xl font-bold">{title}</h3>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              useFlexGap
              sx={{
                flexWrap: {
                  xs: 'wrap',
                  sm: 'no-wrap',
                },
                textAlign: 'center',
              }}
            >
              <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{
                  width: {
                    xs: '100%',
                    sm: 'calc(50% - 1rem)',
                  },
                  marginBottom: '1rem',
                }}
                loading="lazy"
              />
              <Box
                sx={{
                  width: {
                    xs: '100%',
                    sm: 'calc(50% - 1rem)',
                  },
                }}
              >
                <Stack
                  direction={'row'}
                  spacing={4}
                  useFlexGap
                  sx={{ flexWrap: 'wrap' }}
                  justifyContent={'center'}
                >
                  <Chip
                    icon={<CalendarMonth />}
                    label={date}
                    variant="outlined"
                  />
                  <Chip icon={<Alarm />} label={time} variant="outlined" />
                  <Chip icon={<Place />} label={place} variant="outlined" />
                  {location && (
                    <Box>
                      <GoogleMap location={location} />
                    </Box>
                  )}
                </Stack>
              </Box>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Slide>
  )
}

export default EventCard
