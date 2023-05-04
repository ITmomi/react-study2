// import React, {memo} from "react";
// import {useEffect} from 'react/cjs/react.development';
// import {ItemTypes} from 'src/Liplus/nemo/items.jsx'
// import {useDrag, useDrop} from 'react-dnd';
//
//
// export const Nemo = memo(({
// 	id,
// 	index,
// 	nemo,
// 	moveNemo,
// 	someDragging,
// 	setSomeDragging,
// }) => {
// 	const [{isDragging}, dragRef, previewRef] = useDrag (
// 		() => ({
// 			type: ItemTypes.Nemo,
// 			item: { id, index },
// 			collect: (monitor) => ({
// 				isDragging: monitor.isDragging(),
// 			}),
// 			end: (item, monitor) => {
// 				const { id: originID, index: originIndex } = item;
// 				const didDrop = monitor.didDrop();
// 				if(!didDrop) {
// 					moveNemo(originID,originIndex);
// 				}
// 			}
// 		}),
// 		[id, index, moveNemo]
// 	);
// 	const [, dropLeft] = useDrop (
// 		() => ({
// 			accept: ItemTypes.Nemo,
// 			canDrop: () => false,
// 			hover({id: draggedId, index: orgIndex}) {
// 				if(draggedId !== id) {
// 					moveNemo(draggedId, index);
// 				}
// 			},
// 		}),
// 		[moveNemo]
// 	);
// 	const [, dropRight] = useDrop(
// 		() => ({
// 			accept: ItemTypes.Nemo,
// 			canDrop: () => false,
// 			hover({id:draggedId, index: orgIndex}) {
// 				if ( draggedId !== id) {
// 					orgIndex !== index + 1 && moveNemo(draggedId, index + 1);
// 				}
// 			},
// 		}),
// 		[moveNemo]
// 	);
// 	useEffect(
// 		() => {
// 			isDragging ? setSomeDragging(true) : setSomeDragging(false);
// 		}, [isDragging, setSomeDragging]);
//
// 	return (
// 		<>
// 			<div ref={previewRef}
// 			style={{opacity: isDragging ? '0.3' : '1',}}>
// 				<div ref={dragRef}
// 				title="다른 카드 옆으로 드래그해서 위치를 변경합니다.">
// 					{nemo.nemoTitle}
// 				</div>
// 				<div className={styles.imgs}/>
// 				<div
// 				ref={dropLeft}
// 				className={`${styles.drop} ${styles.left}`}
// 				style={{zIndex: someDragging ? 30 : 0}}>
// 				</div>
// 				<div
// 				ref={dropRight}
// 				className={`${styles.drop} ${styles.right}`}
// 				style={{zIndex: someDragging ? 30 : 0}}>
// 				</div>
// 			</div>
// 		</>
// 	);
// }
// );