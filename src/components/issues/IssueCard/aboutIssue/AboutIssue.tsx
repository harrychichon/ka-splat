import styles from './AboutIssue.module.scss';

type AboutIssueProps = {
	coverDate: string;
	volume: string;
	storyArc: string;
	personCredits: string[];
};

const AboutIssue = ({
	coverDate,
	volume,
	storyArc,
	personCredits,
}: Readonly<AboutIssueProps>) => {
	return (
		<div className={styles.container}>
			<ul>
				<li>{coverDate}</li>
				<li>{volume}</li>
				<li>{storyArc}</li>
			</ul>
			<ul>{personCredits}</ul>
		</div>
	);
};

export default AboutIssue;
