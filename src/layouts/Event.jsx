import EventCard from '@/components/EventCard'
import { Box, Fade, Paper, Stack } from '@mui/material'
import { stickyImageUrl, events } from '@data/events'
import { getImageUrl } from '@/utils/imageHelper'
import { useRefContext } from '@/contexts/RefContext'
import useScroll from '@/hooks/useScroll'

function Event() {
  const { eventRef } = useRefContext()
  const stickyImage = getImageUrl(stickyImageUrl)
  const { eventCardSlideIn, eventCardAppear } = useScroll()

  return (
    <Stack
      direction={'row'}
      alignItems={'start'}
      justifyContent={'space-between'}
      ref={eventRef}
      sx={{ overflowX: 'clip' }}
    >
      <Fade in={eventCardAppear}>
        <Paper
          elevation={24}
          sx={{
            width: '45%',
            height: '380px',
            display: {
              xs: 'none',
              md: 'block',
            },
            backgroundImage: `url(${stickyImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'sticky',
            top: 0,
          }}
        ></Paper>
      </Fade>
      <Box
        sx={{
          width: {
            xs: '100%',
            md: '50%',
          },
          marginLeft: {
            md: 'auto',
          },
        }}
      >
        {events.map((event, i) => (
          <EventCard {...event} key={i} index={i} slideIn={eventCardSlideIn} />
        ))}
      </Box>
    </Stack>
  )
}

export default Event
