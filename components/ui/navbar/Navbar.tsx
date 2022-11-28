import { SingleText } from '@components/typography';
import { Box, Cart, Container, Searchbar } from '@components/ui';

export interface INavbar {
  title: string;
}

const Navbar: React.FC<INavbar> = ({ title }) => {
  return (
    <Box className="shadow-[0_2px_25px_rgba(0,0,0,0.05)]">
      <Container>
        <Box className="flex justify-between py-3.5">
          <Box className="flex items-center gap-8">
            <SingleText type="text-400" weight="font-medium">
              {title}
            </SingleText>
            <Box className="w-80">
              <Searchbar />
            </Box>
          </Box>
          <Box className="flex items-center gap-8">
            <Cart />
            <Box>App settings</Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
