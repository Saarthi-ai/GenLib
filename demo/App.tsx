import React from 'react';
import { createRoot } from 'react-dom/client';
import { MyComponent } from '../components/MyComponent'; // Fix import to use named export
import Breadcrum from '../src/components/breadcrum/Breadcrum';
import CallingProgress from '../src/components/callingProgressBar/CallingProgress';
import Chip from '../src/components/chip/Chip';
import ColouredButton from '../src/components/colouredButton/ColouredButton';
import CsvUploadModal from '../src/components/csvUploadModal/CsvUploadModal';


const App = () => {

  return (
    <div>
      <MyComponent title="Hello, World!" />
      {/* <Breadcrum /> */}
      {/* <CallingProgress /> */}
      <Chip key='sadf' value='qwer' />
      <ColouredButton
        actionType="download"
        recommended={false}
        colour="#FF6969"
        text="Download Entries"
        icon={'downloadIconDashboard'}
        onDownload={() => null}
        item={{}}
      />
      {/* <CsvUploadModal /> */}
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container); // Ensure this targets the correct element
  root.render(<App />);
}
