import { Button } from '../components/Button'

export const InquiryDetail = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="mb-7 text-2xl font-bold">문의 상세</h1>
        <div className='flex'>
          <Button isFill={false} width={'w-28'}>
            목록으로
          </Button>
          <div className='w-5'></div>
          <Button isFill={false} width={'w-22'}>
            삭제
          </Button>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white">
        <div className="p-5">
          <p className="text-gray-600">2026년 3월 25일 17:11</p>
          <h1 className="mt-2 text-2xl font-bold">서비스 이용 관련 문의 드립니다</h1>
        </div>

        <div className="flex justify-between bg-[#f8fafb] p-5">
          <div>
            <h3>작성자</h3>
            <p className="font-bold">홍길동</p>
          </div>
          <div>
            <h3>이메일</h3>
            <p className="font-bold">hong@ex.com</p>
          </div>
          <div></div>
        </div>
        <div className="p-5">
          <h3 className="mb-4 font-medium text-gray-600">문의 내용</h3>
          <p>
            안녕하세요. 서비스 이용중 몇가지 궁금한 사항이 있어 문의드립니다. <br />
            <br />
            1. ----- <br />
            2. ----- <br />
            3. ----- <br />
            <br />
            감사합니다.
          </p>
        </div>
      </div>
    </div>
  )
}
