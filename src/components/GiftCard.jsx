import useScroll from '@/hooks/useScroll'
import { getImageUrl } from '@/utils/imageHelper'
import { Paper, Slide } from '@mui/material'

function GiftCard({ role, bank, holder, number, qr, position }) {
  const { giftCardAppear } = useScroll()
  const qrImg = getImageUrl(qr)

  return (
    <Slide
      direction={position === 'start' ? 'right' : 'left'}
      in={giftCardAppear}
    >
      <Paper
        elevation={24}
        className="animate-opacity w-96 border-4 border-solid border-rose-300 p-4 text-center hover:opacity-75"
      >
        <h4 className="text-2xl font-bold">{`Mừng cưới đến ${role}`}</h4>
        <img src={qrImg} alt={`QR code ${role}`} className="mb-4" />
        <p>
          Ngân hàng: <span className="font-bold">{bank}</span>
        </p>
        <p>
          Tên tài khoản: <span className="font-bold">{holder}</span>
        </p>
        <p>
          Số tài khoản: <span className="font-bold">{number}</span>
        </p>
      </Paper>
    </Slide>
  )
}

export default GiftCard
