import './Styles/Card.scss'
import {Cards, CardData} from '../../defs'
//import IMG from '../../Images/image-irene.jpg'

type CardProps = {
	userStatementIndex:number
}

export const Card = ({userStatementIndex}: CardProps) => {
	const cardData:CardData = Cards[userStatementIndex]

	console.log(cardData.imgUrl)

	return (
		<>
			<header className='card-header'>
				<img src={cardData.imgUrl} alt="User" />
				<div className='user-info'>
					<h1>{cardData.custName}</h1>
					<p>{cardData.title}</p>
				</div>
			</header>
			<article className='user-statement'>
				<p>{cardData.statement}</p>
			</article>
		</>
	)
}