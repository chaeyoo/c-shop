import ReactMarkdown from 'react-markdown';

export default function Contents({ contents }: { contents: string }) {
	return <div>
        <ReactMarkdown>{contents}</ReactMarkdown>
    </div>;
}
