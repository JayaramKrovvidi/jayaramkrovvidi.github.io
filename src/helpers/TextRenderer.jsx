export const TextRenderer = ({ children, className }) => {
    const parseText = (text) => {
        text = text.replace(/<strong>(.*?)<\/strong>/g, '<strong>$1</strong>');
        text = text.replace(/<em>(.*?)<\/em>/g, '<em>$1</em>');
        text = text.replace(/<u>(.*?)<\/u>/g, '<u>$1</u>');
        return { __html: text };
    };

    return (
        <span className={className} dangerouslySetInnerHTML={parseText(children)} />
    );
};