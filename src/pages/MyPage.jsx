import { Input } from "../components/Input"
import { Button } from '../components/Button'

export const MyPage = () => {
  return (
    <div className="px-40">
      <h1 className="mb-7 text-2xl font-bold">마이페이지</h1>
      <div className="w-full rounded-xl border border-gray-200 bg-white p-6 mb-8">
        <p className="text-lg font-bold mb-2"> 이름 변경 </p>
        <Input height={'h-12'} placeholder={'이름을 입력하세요'}/>
        <div className="flex w-full justify-end mt-6">
          <Button isFill={true} width={'w-20'}> 변경 </Button>    
        </div>
      </div>

      <div className="w-full rounded-xl border border-gray-200 bg-white p-6">
        <p className="text-lg font-bold mb-2"> 비밀번호 변경 </p>
        <p className="text-sm font-medium text-gray-800 mb-1"> 현재 비밀번호 </p>
        <Input height={'h-12'} placeholder={'현재 비밀번호'}/>
        <p className="text-sm font-medium text-gray-800 mb-1 mt-6"> 새 비밀번호 </p>
        <Input height={'h-12'} placeholder={'새 비밀번호'}/>
        <p className="text-sm font-medium text-gray-800 mb-1 mt-6"> 새 비밀번호 확인 </p>
        <Input height={'h-12'} placeholder={'새 비밀번호 확인'}/>
        <div className="flex w-full justify-end mt-6">
          <Button isFill={true} width={'w-20'}> 변경 </Button>    
        </div>
      </div>
    </div>
    
  )
}
