import { use, useState } from 'react';
import { Button } from '../components/Button'
import { Input } from "../components/Input"
import { Link, useNavigate } from 'react-router';
import clsx from 'clsx'

export const SignUp = () => {
  const [isEmail, setIsEmail] = useState(true)
  const [emailValue, setEmailValue] = useState('');
  const navigate = useNavigate();

  const OnSignUp = () => {
    if (emailValue.includes('@')) {
      navigate('/dashboard')
    } else {
      setIsEmail(false)
    }
  }
  
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#f8fafb]">
      <div className="w-115 rounded-xl border border-gray-200 bg-white px-7">
        <p className='text-2xl font-bold text-center my-6.5'>회원가입</p>

        <input onChange={(e) => setEmailValue(e.target.value)} className={clsx('h-12 w-full bg-[#f8fafb] rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 px-3', 
          !isEmail && 'border-red-500!'
        )} placeholder={'이메일을 입력하세요'} />
        <p className={clsx('font-medium text-xs mt-2.5 mb-5', 
          isEmail ? 'text-gray-500' : 'text-red-500'
        )}> 올바른 이메일 형식을 입력하세요 </p>

        <Input height={'h-12'} placeholder={'비밀번호를 입력하세요'}/>
        <p className='font-medium text-xs text-gray-500 mt-2.5 mb-5'>8자 이상, 영문/숫자/특수문자 포함</p>

        <Input height={'h-12'} placeholder={'비밀번호를 입력하세요'}/>
        <p className='font-medium text-xs text-gray-500 mt-2.5 mb-5'>2자 이상 8자 이하</p>

        <Button isFill={true} width={'w-full'} onClick={OnSignUp} > 회원가입 </Button>
        <p className='text-center text-gray-600 my-8'>이미 계정이 있으신가요? <Link to={'/signIn'} className='text-black underline'>로그인</Link></p>
      </div>
    </div>
  );
};