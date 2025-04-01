import React from "react";
interface ProgressProps {
    actionType: 'upload' | 'download' | 'edit';
    recommended: boolean;
    colour: string;
    text: string;
    icon: any;
    onUpload?: (file: any) => void;
    onDownload?: (file: any, filename: any) => void;
    onEdit?: () => void;
    item?: any;
}
declare const ColouredButton: React.FC<ProgressProps>;
export default ColouredButton;
