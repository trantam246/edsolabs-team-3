import { SwitchLanguage } from 'app/components/switchLanguage';
import { useTranslation } from 'react-i18next';
import { Container } from 'reactstrap';
import { CopyRightFooter } from './style';

const CopyRight = () => {
  const { t } = useTranslation();
  return (
    <CopyRightFooter>
      <Container>
        <div className="copyright">
          <p>{t('footer.copyRight.trademark')}</p>
          <div>
            <SwitchLanguage />
            <span className="right">{t('footer.copyRight.term')}</span> |{' '}
            <span className="left">{t('footer.copyRight.policy')}</span>
          </div>
        </div>
      </Container>
    </CopyRightFooter>
  );
};

export default CopyRight;
