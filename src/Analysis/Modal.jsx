import React from 'react';
import * as SS from "../Liplus/styleSheet";

export const Modal = (props) => {
	const { open, close, header } = props;

	return (
		<div css={SS.modalStyle}>
			<div className={open ? 'openModal modal' : 'modal'}>
				{ open ? (
					<section>
						<header css={SS.test}>
							{header}
							<button className="close" onClick={close}>
								&times;
							</button>
						</header>
						<main>{props.children}</main>
						<footer>
							<button className="close" onClick={close}>
								close
							</button>
						</footer>
					</section>
				) : null}
			</div>
		</div>
	);
};