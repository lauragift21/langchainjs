import { R2Loader } from "langchain/document_loaders/web/r2";

const loader = new R2Loader({
  bucket: "my-document-bucket-123",
  key: "AccountingOverview.pdf",
  s3Config: {
    region: "auto",
    endpoint: `https://e123456789EXAMPLE.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: "AKIAIOSFODNN7EXAMPLE",
      secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    },
  },
  unstructuredAPIURL: "http://localhost:8000/general/v0/general",
  unstructuredAPIKey: "", // this will be soon required
});

const docs = await loader.load();

console.log(docs);
