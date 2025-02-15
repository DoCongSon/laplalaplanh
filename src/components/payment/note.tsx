import { Textarea } from '@/components/ui/textarea'

type NoteProps = {
  value: string
  onChange: (value: string) => void
}

const Note = ({ value, onChange }: NoteProps) => {
  return (
    <div className='flex-1'>
      <Textarea placeholder='Ghi chú cho đơn hàng' value={value} onChange={(e) => onChange(e.target.value)} />
      <div className='text-sm leading-5 text-neutral-7 mt-4'>
        <h5 className='font-bold'>Lưu ý:</h5>
        <ul className='list-disc pl-6'>
          <li>Hàng order sẽ về trong 10 ngày - 15 ngày làm việc</li>
          <li>Đơn hàng có sản phẩm order chỉ được xác nhận khi quý khách đã thanh toán đặt cọc thành công.</li>
          <li>
            Khi hàng order về, Lấp Lánh sẽ liên hệ với quý khách để xác nhận lại phương thức giao hàng, thanh toán và
            phí vận chuyển trước khi gửi hàng.
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Note
