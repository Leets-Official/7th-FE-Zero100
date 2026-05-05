export const DashboardBlock = ({ data, title }) => {
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6">
      <h3 className="mb-5 text-xl font-bold">{title}</h3>
      {Object.entries(data).map(([key, value], index) => (
        <div key={index}>
          <div className="mb-2 flex justify-between">
            <p className="text-gray-600">{key}</p>
            <p className="font-medium">{value}</p>
          </div>
          {Object.entries(data).length != index + 1 && <hr className="mb-5 border-gray-100" />}
        </div>
      ))}
    </div>
  )
}
