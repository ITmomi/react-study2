import * as SS from "./styleSheet";
import React from "react";

export const DrawingType = () => {
	return (
		<>
			<div css={SS.AccordionBox}>
				<div>
					<div>Mab</div>
					<div>Variation</div>
					<div>Reproducibility</div>
					<div>Anova</div>
					<button>Download</button>
				</div>
				<div>
					<div>
						<div></div>
						<button>Close</button>
					</div>
					<div>offset X/Y</div>
					<div>CP/VS</div>
					<div>ETC.</div>
				</div>
			</div>
		</>
	);

};