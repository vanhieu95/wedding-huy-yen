import GiftCard from '@/components/GiftCard'
import { useRefContext } from '@/contexts/RefContext'
import gifts from '@data/gift'
import { Stack } from '@mui/material'

function Gift() {
  const { giftRef } = useRefContext()

  return (
    <Stack
      direction={'row'}
      justifyContent={'space-evenly'}
      gap={3}
      useFlexGap
      sx={{ flexWrap: 'wrap', overflowX: 'hidden' }}
      ref={giftRef}
    >
      {gifts.map((gift, i) => (
        <GiftCard {...gift} key={i} />
      ))}
    </Stack>
  )
}

export default Gift
