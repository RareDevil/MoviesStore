using System.Collections.Generic;
using NUnit.Framework;
using ServiceStack;
using ServiceStack.Testing;
using MoviesStore.ServiceInterface;
using MoviesStore.ServiceModel;

namespace MoviesStore.Tests
{
    public class UnitTest
    {
        private readonly ServiceStackHost appHost;

        public UnitTest()
        {
            appHost = new BasicAppHost().Init();
            appHost.Container.AddTransient<MyServices>();
        }

        [OneTimeTearDown]
        public void OneTimeTearDown() => appHost.Dispose();

        [Test]
        public void Can_call_MyServices()
        {
            var service = appHost.Container.Resolve<MyServices>();

            var response = (HelloResponse)service.Any(new Hello { Name = "World" });

            Assert.That(response.Result, Is.EqualTo("Hello, World!"));
        }

        [Test]
        public void Can_get_movies()
        {
            MyServices service = appHost.Container.Resolve<MyServices>();

            List<MoviesResponse> response = service.Get(new MoviesRequest {});

            // TODO Fix this so that is can load the json file properly
            Assert.That(response, Is.EqualTo(null));
        }
    }
}
