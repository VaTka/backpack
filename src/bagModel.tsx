import { useMemo } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';
import { materialMetalConfig } from './config';

type BagModelProps = {
  color: string
  materialType: 'denim' | 'fabric' | 'leather'
  materialDetail: "Silver" | "Gold" | "Black"
  position: any
};

export default function BagModel({ color, materialType, materialDetail, position }: BagModelProps) {
  const gltf = useGLTF('/models/backpack.glb');
  const { nodes } = useGLTF('/models/backpack.glb');
  console.log(materialDetail)
  console.log(gltf);
  console.log(Object.keys(nodes));
  const textures = {
    denim: useTexture({
      map: '/textures/denim_baseColor.jpg',
      normalMap: '/textures/denim_normal.jpg',
      aoMap: '/textures/denim_occlusionRoughnessMetallic.jpg',
      roughnessMap: '/textures/denim_occlusionRoughnessMetallic.jpg',
      metalnessMap: '/textures/denim_occlusionRoughnessMetallic.jpg',
    }),
    fabric: useTexture({
      map: '/textures/fabric_baseColor.jpg',
      normalMap: '/textures/fabric_normal.jpg',
      aoMap: '/textures/fabric_occlusionRoughnessMetallic.jpg',
      roughnessMap: '/textures/fabric_occlusionRoughnessMetallic.jpg',
      metalnessMap: '/textures/fabric_occlusionRoughnessMetallic.jpg',
    }),
    leather: useTexture({
      map: '/textures/leather_baseColor.jpg',
      normalMap: '/textures/leather_normal.jpg',
      aoMap: '/textures/leather_occlusionRoughnessMetallic.jpg',
      roughnessMap: '/textures/leather_occlusionRoughnessMetallic.jpg',
      metalnessMap: '/textures/leather_occlusionRoughnessMetallic.jpg',
    }),
    metall: useTexture({
      map: '/textures/metall_baseColor.jpg',
      normalMap: '/textures/metall_normal.jpg',
      aoMap: '/textures/metall_occlusionRoughnessMetallic.jpg',
      roughnessMap: '/textures/metall_occlusionRoughnessMetallic.jpg',
      metalnessMap: '/textures/metall_occlusionRoughnessMetallic.jpg',
    }),
    strap: useTexture({
      map: '/textures/strap_baseColor.jpg',
      normalMap: '/textures/strap_normal.jpg',
      aoMap: '/textures/strap_occlusionRoughnessMetallic.jpg',
      roughnessMap: '/textures/strap_occlusionRoughnessMetallic.jpg',
      metalnessMap: '/textures/strap_occlusionRoughnessMetallic.jpg',
    }),
  };

  const selected = textures[materialType];
  const selectedMetal = textures["metall"];

  const material = useMemo(() => {
    const mat = new MeshStandardMaterial({
      map: selected.map,
      normalMap: selected.normalMap,
      aoMap: selected.aoMap,
      roughnessMap: selected.roughnessMap,
      metalnessMap: selected.metalnessMap,
    });
    mat.metalness = 1;
    mat.roughness = 1;
    return mat;
  }, [selected]);
  material.color.set(color);

  const materialMetal = useMemo(() => {
    const mat = new MeshStandardMaterial({
      map: selectedMetal.map,
      normalMap: selectedMetal.normalMap,
      aoMap: selectedMetal.aoMap,
      roughnessMap: selectedMetal.roughnessMap,
      metalnessMap: selectedMetal.metalnessMap,
    });
    mat.metalness = 1;
    mat.roughness = 1;
    return mat;
  }, []);
  materialMetal.color.set(materialMetalConfig.get(materialDetail)![2]);
  return (
    <primitive
      object={gltf.scene}
      dispose={null}
      position={position}
    >
      {gltf.scene.traverse((child) => {
        if ((child as any).isMesh) {
          (child as any).material = material;
          if ((child as any).name === 'Mesh_1') {
            (child as any).material = materialMetal
          }
        }
      })}
    </primitive>
  );
}
