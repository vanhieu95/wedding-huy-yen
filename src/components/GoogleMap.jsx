import { Box } from '@mui/material'

function GoogleMap({ location }) {
  return (
    <Box>
      <iframe
        src={`https://www.google.com/maps/embed?${location}`}
        width="240"
        height="180"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Box>
  )
}

export default GoogleMap
