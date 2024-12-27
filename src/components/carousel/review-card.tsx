import Image from 'next/image'

export type ReviewCardProps = {
  rating: number
  review: string
  customerName: string
  imageUrl: string
}

const ReviewCard = ({ customerName, imageUrl, rating, review }: ReviewCardProps) => {
  return (
    <div className='w-[22.93931rem] h-[30.5295rem] rounded-[1.1245rem] relative overflow-hidden'>
      <Image src={imageUrl} alt={customerName} fill className='w-full h-full object-cover select-none' />
      <div className='absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[#1A2826]/70 to-white/0 p-[1.34938rem]'>
        <h6 className='text-base leading-5 font-semibold text-white'>{customerName}</h6>
        <div className='flex gap-2 mt-2'>
          {[...Array(rating)].map((_, index) => (
            <Image key={index} src='/icons/icon-star-rating.svg' alt='' width={12} height={12} />
          ))}
        </div>
        <p className='paragraph-2 text-floral-white mt-5'>{review}</p>
      </div>
    </div>
  )
}

export default ReviewCard
