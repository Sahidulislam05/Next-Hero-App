import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppChart = ({ app }) => {
  const data = app?.ratings || [];
  //   console.log( typeof data);
  return (
    <div className="w-full max-w-7xl mx-auto my-10 px-4">
      <h1 className="text-2xl font-semibold my-10 text-center md:text-left ">
        Ratings
      </h1>
      <div className="bg-base-100 border rounded-xl p-4 h-80 md:h-96 ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 10, right: 10, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis dataKey="name" type="category" width={80} />
            <XAxis type="number" />
            <Tooltip />
            <Legend />

            <Bar dataKey="count" fill="#FF8C00" barSize={25} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AppChart;
