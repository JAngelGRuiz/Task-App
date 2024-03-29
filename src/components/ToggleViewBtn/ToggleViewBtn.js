import React from 'react';
import { ButtonContainer, Button } from './styles';
import { observer } from 'mobx-react';

const ToggleViewBtn = ({ taskList }) => {
    return (
        <ButtonContainer>
            <Button
              isHidden={taskList.hideDone}
              onClick={taskList.hideTasksDone}> 
                {`${taskList.hideDone ? 'Show' : 'Hide'} completed`} 
              </Button>
        </ButtonContainer>
    )
}

export default observer(ToggleViewBtn);
