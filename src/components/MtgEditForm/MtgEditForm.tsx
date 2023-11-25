import React, { FC } from 'react';
import { MtgEditFormWrapper } from './MtgEditForm.styled';

interface MtgEditFormProps {}

const MtgEditForm: FC<MtgEditFormProps> = () => (
 <MtgEditFormWrapper data-testid="MtgEditForm">
    MtgEditForm Component
 </MtgEditFormWrapper>
);

export default MtgEditForm;
