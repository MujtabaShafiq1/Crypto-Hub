import { Typography, styled } from "@mui/material";

const LongTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
}));

const ListHeader = styled(Typography)(({ theme }) => ({
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    color: theme.palette.text.primary,
    fontWeight: 500,
    fontSize: theme.typography.body.fontSize,
}));

const HeaderText = styled(Typography)(({ theme }) => ({
    ontWeight: 500,
    color: theme.palette.text.primary,
    fontSize: theme.typography.header.fontSize,
}));

const BodyText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: theme.typography.body.fontSize,
}));

const SubText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: theme.typography.subBody.fontSize,
}));

const HelperText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: theme.typography.helper.fontSize,
}));

const InfoText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: theme.typography.helper.fontSize,
}));

export { LongTypography, HeaderText, BodyText, HelperText, InfoText, SubText, ListHeader };
