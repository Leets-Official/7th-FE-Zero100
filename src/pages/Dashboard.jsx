import { DashboardBlock } from '../components/DashboardBlock'

const myInfo = {
  이름: '홍길동',
  이메일: 'test@test.com',
  가입일: '2026.01.14',
}

const inquiryInfo = {
  '전체 문의': '24건',
  '내가 쓴 문의': '8건',
}
export const Dashboard = () => {
  return (
    <div>
      <h1 className="mb-7 text-2xl font-bold">대시보드</h1>
      <div className="flex">
        <DashboardBlock data={myInfo} title={'내 정보'} />
        <div className="w-10" />
        <DashboardBlock data={inquiryInfo} title={'문의 현황'} />
      </div>
    </div>
  )
}
