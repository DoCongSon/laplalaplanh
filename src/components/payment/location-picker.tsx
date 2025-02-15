import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

interface City {
  Id: string
  Name: string
  Districts: District[]
}

interface District {
  Id: string
  Name: string
  Wards: Ward[]
}

interface Ward {
  Id: string
  Name: string
}

export type Address = {
  city: Ward | null
  district: Ward | null
  ward: Ward | null
  street: string | null
}

type LocationPickerProps = {
  onChange?: (address: Address) => void
  defaultValues?: Address
  className?: string
}

const LocationPicker = ({ onChange, className, defaultValues }: LocationPickerProps) => {
  const [cities, setCities] = useState<City[]>([])
  const [districts, setDistricts] = useState<District[]>([])
  const [wards, setWards] = useState<Ward[]>([])
  const [street, setStreet] = useState(defaultValues?.street || '')
  const [selectedCity, setSelectedCity] = useState<Ward | null>(null)
  const [selectedDistrict, setSelectedDistrict] = useState<Ward | null>(null)
  const [selectedWard, setSelectedWard] = useState<Ward | null>(null)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
      .then((response) => response.json())
      .then((data) => {
        setCities(data)
        if (defaultValues) {
          // set districts and wards data
          const defaultCity = data.find((city: City) => city.Id === defaultValues.city?.Id)
          if (defaultCity) {
            setSelectedCity(defaultValues.city)
            setDistricts(defaultCity.Districts)
            const defaultDistrict = defaultCity.Districts.find(
              (district: District) => district.Id === defaultValues.district?.Id
            )
            if (defaultDistrict) {
              setSelectedDistrict(defaultValues.district)
              setWards(defaultDistrict.Wards)
              setSelectedWard(defaultValues.ward)
            }
          }
        }
      })
  }, [defaultValues])

  const handleCityChange = (cityId: string) => {
    if (cityId) {
      setDistricts([])
      setWards([])
      const selectedCityData = cities.find((city) => city.Id === cityId)
      if (selectedCityData) {
        setSelectedCity(selectedCityData)
        setDistricts(selectedCityData.Districts)
      }
    }
  }

  const handleDistrictChange = (districtId: string) => {
    if (districtId) {
      setWards([])
      const selectedDistrictData = districts.find((district) => district.Id === districtId)
      if (selectedDistrictData) {
        setSelectedDistrict(selectedDistrictData)
        setWards(selectedDistrictData.Wards)
      }
    }
  }

  const handleWardChange = (wardId: string) => {
    if (wardId) {
      const selectedWardData = wards.find((ward) => ward.Id === wardId)
      if (selectedWardData) {
        setSelectedWard(selectedWardData)
      }
    }
  }

  useEffect(() => {
    if (onChange) {
      onChange({
        city: selectedCity,
        district: selectedDistrict,
        ward: selectedWard,
        street,
      })
    }
  }, [selectedCity, selectedDistrict, selectedWard, street, onChange])

  return (
    <div className={cn('flex flex-col gap-5', className)}>
      <div className='flex gap-5'>
        <Select value={selectedCity?.Id} onValueChange={handleCityChange}>
          <SelectTrigger>
            <SelectValue placeholder='Tỉnh/Thành phố' />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city.Id} value={city.Id}>
                {city.Name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedDistrict?.Id} onValueChange={handleDistrictChange}>
          <SelectTrigger>
            <SelectValue placeholder='Quận/Huyện' />
          </SelectTrigger>
          <SelectContent>
            {districts.map((district) => (
              <SelectItem key={district.Id} value={district.Id}>
                {district.Name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={selectedWard?.Id} onValueChange={handleWardChange}>
          <SelectTrigger>
            <SelectValue placeholder='Phường/Xã' />
          </SelectTrigger>
          <SelectContent>
            {wards.map((ward) => (
              <SelectItem key={ward.Id} value={ward.Id}>
                {ward.Name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Input value={street} onChange={(e) => setStreet(e.target.value)} placeholder='Số nhà + tên đường' />
    </div>
  )
}

export default LocationPicker
