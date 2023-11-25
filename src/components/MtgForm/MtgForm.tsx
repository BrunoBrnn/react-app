import React, { FC } from 'react';
import { MtgFormWrapper } from './MtgForm.styled';

interface MtgFormProps {}

const MtgForm: FC<MtgFormProps> = () => (
 <MtgFormWrapper data-testid="MtgForm">
    MtgForm Component
 </MtgFormWrapper>
);

export default MtgForm;
