import { Button } from '../components/Button'
import { useToast } from '../components/Toast';

export const Modal = ({ children, closeModal }) => {
  const openToast = useToast();

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50">
      <div className="w-100 h-45 rounded-xl border border-gray-200 bg-white flex flex-col justify-center">
        <p className='text-xl text-center'>{children}</p>
        <div className="flex w-full justify-center mt-8">
          <Button isFill={false} width={'w-20'} onClick={closeModal}> 취소 </Button>
          <div className='w-5'></div>
          <Button isFill={true} width={'w-20'} onClick={() => openToast('삭제되었습니다')} to={'/inquiryList'}> 확인 </Button>
        </div>
      </div>
    </div>
  );
};