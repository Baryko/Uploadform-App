import React, { CSSProperties } from 'react';
import { ClipLoader } from 'react-spinners';
import successIcon from '../../../assets/icons/checked.png';
import { Wrapper } from './UploadFinalizedScreen.styles';
import { Props } from './UploadFinalizedScreen.types';

const override: CSSProperties = {
  position: 'absolute',
  top: '30%',
};

function UploadSuccess({ getDataFromFirebase, loading }: Props) {
  return (
    <Wrapper>
      {loading ? (
        <ClipLoader color="blue" size="140" loading={loading} cssOverride={override} />
      ) : (
        <img src={successIcon} alt="successIcon" />
      )}
      <div
        role="button"
        onClick={() => {
          getDataFromFirebase();
        }}
        aria-hidden="true"
      >
        <span>click here to see the upload</span>
      </div>
    </Wrapper>
  );
}

export default UploadSuccess;
