const Button = ({ label, onClick, isActive }) => {
  let style = "font-bold transition-colors ";

  if (label === 'Add') {
    style += "w-full border border-black bg-black text-white p-3 rounded-md text-lg mt-2";
  } else if (label === 'Save') {
    style += "flex-1 bg-black text-white py-2 rounded-md hover:bg-gray-800";
  } else if (label === 'Delete') {
    style += "flex-1 bg-[#ef4444] text-white py-2 rounded-md border border-[#ef4444] hover:bg-red-600";
  } else if (label === 'Edit' || label === 'Cancel') {
    style += "flex-1 bg-white border border-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-50";
  } else if (label === 'All' || label === 'Active' || label === 'Completed') {
    // 선택되는 라벨 배경을 검은색으로 변경
    style += `flex-1 py-2 rounded-md border ${
      isActive 
        ? 'bg-black text-white border-black' 
        : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
    }`;
  }

  return (
    <button className={style} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;