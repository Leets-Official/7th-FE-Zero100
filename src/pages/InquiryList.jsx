import { Link } from 'react-router'
import { Button } from '../components/Button'

export const InquiryList = () => {

  const inquiryData = [
    { id: 1, title: '서비스 이용 관련 문의 드립니다', date: '2024년 3월 25일 17:11' },
    { id: 2, title: '결제 시스템에 대해 질문이 있습니다', date: '2024년 3월 23일 12:12' },
    { id: 3, title: '회원가입이 되지 않습니다', date: '2024년 3월 23일 07:43' },
    { id: 4, title: '대시보드 기능 개선 요청', date: '2024년 3월 22일 14:01' },
    { id: 5, title: 'API 연동 방법 문의', date: '2024년 3월 21일 13:11' },
  ]

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="mb-7 text-2xl font-bold">문의 목록</h1>
        <Button isFill={true} width={'w-26'} to={'/inquiryWrite'}> 문의 등록 </Button>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200">
        <div className="flex border-b border-gray-200 font-bold text-gray-600 py-2">
          <div className="w-17 ml-4">번호</div>
          <div className="flex-1 ml-5">제목</div>
          <div className="w-45">작성일</div>
        </div>

        <div className="bg-white">
          {inquiryData.map((inquiry) => (
            <div key={inquiry.id} className={'flex items-center border-t border-gray-100 py-2.5'}>
              <div className="w-17 ml-4 text-gray-500">{inquiry.id}</div>
              <div className="flex-1 ml-5">
                <Link to="/inquiryDetail">
                  {inquiry.title}
                </Link>
              </div>
              <div className="w-45 text-sm text-gray-700">{inquiry.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
