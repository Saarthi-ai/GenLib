type Props = {
    text: string;
    extraClass?: string;
    onCountChange: (count: number) => void;
    getCount?: number | 0;
};
declare const AddButton: (props: Props) => import("react/jsx-runtime").JSX.Element;
export default AddButton;
