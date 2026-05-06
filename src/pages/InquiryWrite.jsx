import { Input } from "../components/Input"
import { Button } from '../components/Button'

export const InquiryWrite = () => {
  return (
    <div className="px-40">
      <h1 className="mb-7 text-2xl font-bold">문의 등록</h1>
      <div className="w-full rounded-xl border border-gray-200 bg-white p-6">
    
      <p className="text-sm font-medium text-gray-800 mb-1"> 이름 </p>
      <Input height={'h-12'} placeholder={'이름을 입력하세요'}/>

      <p className="text-sm font-medium text-gray-800 mb-1 mt-6"> 이메일 </p>
      <Input height={'h-12'} placeholder={'이메일을 입력하세요'}/>

      <p className="text-sm font-medium text-gray-800 mb-1 mt-6"> 제목 </p>
      <Input height={'h-12'} placeholder={'제목을 입력하세요'}/>

      <p className="text-sm font-medium text-gray-800 mb-1 mt-6"> 내용 </p>
      <Input height={'h-42'} placeholder={'내용을 입력하세요'}/>

      <div className="flex w-full justify-end mt-6">
        <Button isFill={false} width={'w-20'} to={'/inquiryList'}> 취소 </Button>
        <div className='w-5'></div>
        <Button isFill={true} width={'w-20'} to={'/inquiryList'}> 등록 </Button>
      </div>
      </div>
    </div>
  )
}
