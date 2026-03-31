import Button from '../components/Button';

const FilterButtons = ({ currentPath, navigate }) => {
  return (
    <div className="flex gap-2 mb-8">
      <Button label="All" isActive={currentPath === '/all'} onClick={() => navigate('/all')} />
      <Button label="Active" isActive={currentPath === '/'} onClick={() => navigate('/')} />
      <Button label="Completed" isActive={currentPath === '/completed'} onClick={() => navigate('/completed')} />
    </div>
  );
};

export default FilterButtons;