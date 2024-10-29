import { Box } from '@mui/material'
import couple from '@data/couple'
import CoupleCard from '@/components/CoupleCard'
import { useRefContext } from '@/contexts/RefContext'

function Couple() {
  const { coupleRef } = useRefContext()

  return (
    <Box
      className="mx-auto flex flex-wrap justify-center gap-12 overflow-x-hidden md:flex-nowrap md:justify-between"
      direction="row"
      ref={coupleRef}
    >
      {couple.map((person, i) => (
        <CoupleCard {...person} key={i} />
      ))}
    </Box>
  )
}

export default Couple
