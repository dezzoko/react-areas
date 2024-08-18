import { AiDialog } from '@/widgets/AiDialog';
import { Box } from '@mui/material';
import { AiPageHeader } from '../AiPageHeader/AiPageHeader';
function AiPage() {
    return (
        <Box padding="24px">
            <AiPageHeader />
            <main>
                <AiDialog />
            </main>
        </Box>
    );
}

export default AiPage;
