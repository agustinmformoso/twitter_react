import React from 'react';
import ImgTest from '../../logo.svg';

const Test = () => {
	return (
		<>
			<div className="test">
				<h1 className="test__h1"><span className="test__h1__span">Esto es</span>Titulo</h1>
				<h1 className="test__h1"><span className="test__h1__span">Esto es</span>Titulo</h1>
				<h1 className="test__h1"><span className="test__h1__span test__h1__span--null">Esto no es</span>Titulo</h1>
				<h1 className="test__h1"><span className="test__h1__span">Esto es</span>Titulo</h1>
				<h2>subtitulo</h2>
				<p>kasdñlasdja sñdkkaldkasdlkasdñlkasñldkasñldkasd</p>
				<img src={ImgTest} alt={ImgTest} />
			</div>
			<h1>jajajaja</h1>
		</>
	);
};

export default Test;
