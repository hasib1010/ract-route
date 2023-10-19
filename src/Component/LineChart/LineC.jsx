import { LineChart, Line } from 'recharts';
import { ProgressBar } from 'react-loader-spinner'

const LineC = () => {
    const [loading, setLoading]= [true];
    const studentsData = [
        { id: 1, name: "John Smith", math_mark: 85, physics_mark: 78, chemistry_mark: 90 },
        { id: 2, name: "Emily Johnson", math_mark: 78, physics_mark: 82, chemistry_mark: 85 },
        { id: 3, name: "Michael Davis", math_mark: 92, physics_mark: 88, chemistry_mark: 91 },
        { id: 4, name: "Sarah Miller", math_mark: 88, physics_mark: 85, chemistry_mark: 87 },
        { id: 5, name: "Christopher Wilson", math_mark: 95, physics_mark: 92, chemistry_mark: 93 },
        { id: 6, name: "Amanda Brown", math_mark: 79, physics_mark: 76, chemistry_mark: 80 },
        { id: 7, name: "Daniel Moore", math_mark: 91, physics_mark: 89, chemistry_mark: 94 },
        { id: 8, name: "Olivia Lee", math_mark: 84, physics_mark: 81, chemistry_mark: 88 },
        { id: 9, name: "James Taylor", math_mark: 89, physics_mark: 90, chemistry_mark: 92 },
        { id: 10, name: "Sophia Anderson", math_mark: 93, physics_mark: 87, chemistry_mark: 91 }
    ];

    return (
        <div>
            

            <LineChart width={500} height={400} data={studentsData}>
                <Line dataKey={"math_mark"} stroke='blue'></Line>
                <Line dataKey={"physics_mark"} stroke='green'></Line>
                <Line dataKey={"chemistry_mark"} stroke='red'></Line>
            </LineChart>

        </div>
    );
};

export default LineC;