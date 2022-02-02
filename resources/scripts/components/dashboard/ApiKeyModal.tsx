import React, { useContext } from 'react';
import tw from 'twin.macro';
import Button from '@/components/elements/Button';
import asModal from '@/hoc/asModal';
import ModalContext from '@/context/ModalContext';
import CopyOnClick from '@/components/elements/CopyOnClick';

interface Props {
    apiKey: string;
}

const ApiKeyModal = ({ apiKey }: Props) => {
    const { dismiss } = useContext(ModalContext);

    return (
        <>
            <h3 css={tw`mb-6 text-2xl`}>Dein API Schlüssel</h3>
            <p css={tw`text-sm mb-6`}>
                Der von Ihnen angeforderte API-Schlüssel wird unten angezeigt. Bitte bewahre diese an einem sicheren Ort auf, sie wird nicht erneut angezeigt. 
            </p>
            <pre css={tw`text-sm bg-neutral-900 rounded py-2 px-4 font-mono`}>
                <CopyOnClick text={apiKey}><code css={tw`font-mono`}>{apiKey}</code></CopyOnClick>
            </pre>
            <div css={tw`flex justify-end mt-6`}>
                <Button type={'button'} onClick={() => dismiss()}>
                    Schließen
                </Button>
            </div>
        </>
    );
};

ApiKeyModal.displayName = 'ApiKeyModal';

export default asModal<Props>({
    closeOnEscape: false,
    closeOnBackground: false,
})(ApiKeyModal);
