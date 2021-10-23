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
            <a
              href="https://defi-for-you.gitbook.io/faq/p2p-lending/terms-of-service"
              className="right"
            >
              {t('footer.copyRight.term')}
            </a>{' '}
            |{' '}
            <a
              href="https://defi-for-you.gitbook.io/faq/p2p-lending/privacy-policy"
              className="left"
            >
              {t('footer.copyRight.policy')}
            </a>
          </div>
        </div>
      </Container>
    </CopyRightFooter>
  );
};

export default CopyRight;
