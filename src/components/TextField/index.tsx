import React from 'react';
import styles from './styles.module.scss';

type Props = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  value: string | number | readonly string[] | undefined;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
};
function Index(props: Props) {
  const { value, onChange, placeholder } = props;
  return (
    <textarea
      {...props}
      className={styles.container}
      value={value}
      onChange={(e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`;
        onChange(e);
      }}
      rows={1}
      placeholder={placeholder}
    ></textarea>
  );
}

export default Index;
