import { Canvas } from '@react-three/fiber';
import BagModel from './bagModel';
import { OrbitControls } from '@react-three/drei';

type ModelProps = {
    color: string
    matrial: 'denim' | 'fabric' | 'leather'
    materialDetail: "Silver" | "Gold" | "Black"
}

export const ProductConfigurator: React.FC<ModelProps> = ({ color, matrial, materialDetail }) => {
    return (
        <div className='h-[60%] w-full'>
            <Canvas camera={{ position: [0, 0, 0.9] }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={1.5} />
                <OrbitControls enablePan={false} enableZoom={true} target={[0, 0, 0.4]}/>
                <BagModel color={color} materialType={matrial} materialDetail={materialDetail} position={[0, -0.2, 0.4]} />
            </Canvas>
        </div>
    );
}
