import React from 'react';
import {
  MuiDialog as Dialog,
  MuiDivider as Divider,
  MuiGrid as Grid,
  DialogContent,
  DialogTitle,
  DialogSubTitle,
  DialogTitleWrapper,
  CloseIconButton,
  MuiCloseIcon as CloseIcon,
} from './styled';

interface DialogProps {
  id: string;
  fullWidth?: boolean;
  isOpen: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  onClose(): void;
  title: string;
  subtitle?: string;
}

const DialogContainer: React.FC<DialogProps> = ({
  id,
  children,
  fullWidth,
  isOpen,
  maxWidth,
  onClose,
  title,
  subtitle,
}) => (
  <Dialog
    aria-labelledby="dialog-window"
    onClose={onClose}
    open={isOpen}
    maxWidth={maxWidth}
    fullWidth={fullWidth}
  >
    <DialogTitleWrapper disableTypography id={`${id}-dialog-title`}>
      <Grid container alignItems="flex-end">
        <DialogTitle data-testid={`${id}-dialog-title-text`} variant="h6">
          {title}
        </DialogTitle>
        {subtitle && (
          <>
            <Divider orientation="vertical" flexItem />
            <DialogSubTitle
              data-testid={`${id}-dialog-subtitle-text`}
              variant="subtitle1"
            >
              {subtitle}
            </DialogSubTitle>
          </>
        )}
      </Grid>
      <CloseIconButton
        data-testid={`${id}-dialog-close-button`}
        aria-label="close"
        onClick={onClose}
      >
        <CloseIcon color="secondary" />
      </CloseIconButton>
    </DialogTitleWrapper>
    <DialogContent dividers>{children}</DialogContent>
  </Dialog>
);

export default DialogContainer;
