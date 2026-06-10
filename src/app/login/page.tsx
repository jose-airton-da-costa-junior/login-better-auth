import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Login() {
  return (
    <div>
      <Tabs defaultValue="sign-in" className="w-100">
        <TabsList>
          <TabsTrigger value="sign-in">Entrar</TabsTrigger>
          <TabsTrigger value="sign-up">Criar Conta</TabsTrigger>
        </TabsList>

        <TabsContent value="sign-in">SignIn</TabsContent>
        <TabsContent value="sign-up">SigUp</TabsContent>
      </Tabs>
    </div>
  );
}
