import { Button } from '../components/Button'
import { Input } from "../components/Input"
import { Link, useNavigate } from 'react-router';
import { use, useState } from 'react';
import clsx from 'clsx'

export const SignIn = () => {
  const [isEmail, setIsEmail] = useState(true)
  const [emailValue, setEmailValue] = useState('');
  const navigate = useNavigate();

  const OnSignIn = () => {
    if (emailValue.includes('@')) {
      navigate('/dashboard')
    } else {
      setIsEmail(false)
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#f8fafb]">
      <div className="w-115 rounded-xl border border-gray-200 bg-white px-7">
        <p className='text-2xl font-bold text-center my-6.5'>로그인</p>

        <input onChange={(e) => setEmailValue(e.target.value)} className={clsx('h-12 w-full bg-[#f8fafb] rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 px-3', 
          !isEmail && 'border-red-500!'
        )} placeholder={'이메일을 입력하세요'} />
        <p className={clsx('font-medium text-xs mt-2.5', 
          isEmail ? 'text-gray-500 hidden' : 'text-red-500'
        )}> 올바른 이메일 형식을 입력하세요 </p>

        <div className='h-4'/>
        <Input height={'h-12'} placeholder={'비밀번호를 입력하세요'}/>

        <div className='h-4'/>
        <Button isFill={true} width={'w-full'} onClick={OnSignIn} > 로그인 </Button>

        <div className='flex items-center w-full my-9'>
          <hr className='w-full border-gray-300'/>
          <p className='w-20 text-center text-gray-500 font-medium'>또는</p>
          <hr className='w-full border-gray-300'/>
        </div>

        <button className='flex items-center justify-center h-10.5 rounded-lg text-center font-bold bg-[#fee500] w-full text-amber-950'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5.5 mr-1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
          </svg>
          카카오 로그인
        </button>

        <p className='text-center text-gray-600 my-8'>계정이 없으신가요? <Link to={'/signUp'} className='text-black underline'>회원가입</Link></p>
      </div>
    </div>
  );
};