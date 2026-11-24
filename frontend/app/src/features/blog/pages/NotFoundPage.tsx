import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <Stack sx={{
            alignItems: "center",
            justifyContent: "center",
            minHeight: "80vh", textAlign: "center", p: 3
        }}
            spacing={2}
        >
            <Typography variant="h1">404</Typography>

            <Typography variant="h5">
                Page not found
            </Typography>

            <Typography color="text.secondary">
                The blog or post you're looking for doesn't exist.
            </Typography>

            <Button variant="contained" onClick={() => navigate("/")}>
                Go to Home
            </Button>
        </Stack>
    );
}

export default NotFoundPage;